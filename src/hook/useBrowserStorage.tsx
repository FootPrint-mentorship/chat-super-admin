type JSObject = { [key: string]: unknown };


type JSONObject<D = JSObject> = object | Record<keyof D, string | boolean | number | null | undefined>;


type SerializableValues<D = object> = string | number | boolean | null | undefined | JSONObject<D>;


interface BrowserStorage {
  getFromStorage<T extends SerializableValues>(key: string, defaultPayload: T): T;
  setToStorage: (key: string, value: SerializableValues) => boolean;
  clearFromStorage: (key: string) => boolean;
}

type BrowserStorageOptions = {
  enableEncryption: boolean,
  storageType: "session" | "local"
};

const encrypt = <O extends JSObject>(value: SerializableValues<O>): string => {
  return JSON.stringify(value);
};

const decrypt = <O extends JSObject>(value: string): SerializableValues<O> => {
  return JSON.parse(value);
};

export const useBrowserStorage = (
  { enableEncryption = false, storageType = "session" }: BrowserStorageOptions
): BrowserStorage => {

    return {
      setToStorage: (key: string, value = null as SerializableValues): boolean => {
        /* 
          @HINT: 
        
          This is the side-effect for each state change cycle - we want to write to
          `localStorage` | `sessionStorage`
        */
        if (typeof window !== "undefined") {
          const storageDriver = storageType === "session" ? sessionStorage : localStorage;
          try {
            if (!enableEncryption) {
              if (value !== null) {
                if (typeof key === "string") {
                  storageDriver.setItem(
                    key,
                    typeof value === "string" || typeof value === "number"
                        ? "" + value
                        : JSON.stringify(value)
                  );
                  return true;
                }
              }
            } else {
              if (value !== null) {
                if (typeof key === "string") {
                  storageDriver.setItem(key, encrypt(value));
                  return true;
                }
              }
            }
          } catch (error) {
            const storageError = error as Error;
            if (storageError.name === "QuotaExceededError") {
              return false;
            }
          }

        }
        return false;
      },
      clearFromStorage: (key = "") => {
        /* @HINT: As the component unmounts, we want to delete from `localStorage` | `sessionStorage` */
        if (typeof window !== "undefined") {
          const storageDriver = storageType === "session" ? sessionStorage : localStorage;
          try {
            storageDriver.removeItem(key);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (_) {
            return false;
          }
          return true;
        }
        return false;
      },
      getFromStorage(key: string, defaultPayload: SerializableValues) {
        

        /* @HINT: We want to fetch from `localStorage` | `sessionStorage` */
        let stringifiedPayload = null;

        try {
          if (typeof window !== "undefined") {
            const storageDriver = storageType === "session" ? sessionStorage : localStorage;
            stringifiedPayload = storageDriver.getItem(key);
          }
        } catch (error) {
          const storageError = error as Error;
          if (storageError.name === "SecurityError") {
            stringifiedPayload = null;
          }
        }
  
        if (!enableEncryption) {
          let payload = null;
          try {
            payload = !stringifiedPayload
              ? defaultPayload
              : JSON.parse(stringifiedPayload);
          } catch (e) {
            const error = e as Error;
            payload = defaultPayload;
            if (error.name === "SyntaxError") {
              if (stringifiedPayload !== null) {
                payload = stringifiedPayload;
              }
            }
          }
          return payload;
        } else {
          let payload = defaultPayload;
          
          if (stringifiedPayload !== null) {
            payload = decrypt(stringifiedPayload);
          }
          return payload;
        }
      }
    };
  };
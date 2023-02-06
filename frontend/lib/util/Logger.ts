/**
 * Utility class for logging.
 */
export class LOGGER {
    private static STYLE = {
        BASE: [
            "color: #fff",
            "background-color: #444",
            "padding: 2px 4px",
            "border-radius: 2px"
        ],
        WARNING: [
            "color: #eee",
            "background-color: yellow",
        ],
        ERROR: [
            "color: #eee",
            "background-color: red",
        ],
        INFO: [
            "color: #eee",
            "background-color: blue"
        ],
        DEBUG: [
            "color: #eee",
            "background-color: green"
        ]
    };
    
    private static LOG_LEVEL = process.env.NEXT_PUBLIC_LOGGING_LEVEL;
    
    /**
     * Logs a warning message to the console.
     *
     * @param text              The text to log.
     * @param optionalParams    Optional parameters to log.
     */
    static warn(text: string, ...optionalParams: any[]): void {
        let style = this.STYLE.BASE.join(';') + ';';
        style += this.STYLE.WARNING.join(';');
        if (this.LOG_LEVEL === "INFO" || this.LOG_LEVEL === "DEBUG" || this.LOG_LEVEL === "TRACE" || this.LOG_LEVEL === "ERROR") {
            console.warn(`%c${text}`, style, ...optionalParams);
        }
    }
    
    /**
     * Logs an error message to the console.
     *
     * @param text              The text to log.
     * @param optionalParams    Optional parameters to log.
     */
    static error(text: string, ...optionalParams: any[]): void {
        let style = this.STYLE.BASE.join(';') + ';';
        style += this.STYLE.ERROR.join(';');
        if (this.LOG_LEVEL === "INFO" || this.LOG_LEVEL === "DEBUG" || this.LOG_LEVEL === "TRACE" || this.LOG_LEVEL === "ERROR") {
            console.error(`%c${text}`, style, ...optionalParams);
        }
    }
    
    /**
     * Logs a debug message to the console.
     *
     * @param text              The text to log.
     * @param optionalParams    Optional parameters to log.
     */
    static debug(text: string, ...optionalParams: any[]): void {
        let style = this.STYLE.BASE.join(';') + ';';
        style += this.STYLE.DEBUG.join(';');
        if (this.LOG_LEVEL === "DEBUG" || this.LOG_LEVEL === "TRACE") {
            console.debug(`%c${text}`, style, ...optionalParams);
        }
    }
    
    /**
     * Logs an info message to the console.
     *
     * @param text              The text to log.
     * @param optionalParams    Optional parameters to log.
     */
    static info(text: string, ...optionalParams: any[]): void {
        let style = this.STYLE.BASE.join(';') + ';';
        style += this.STYLE.INFO.join(';');
        if (this.LOG_LEVEL === "INFO" || this.LOG_LEVEL === "DEBUG" || this.LOG_LEVEL === "TRACE") {
            console.info(`%c${text}`, style, ...optionalParams);
        }
    }
    
    /**
     * Logs a default message to the console.
     *
     * @param text              The text to log.
     * @param optionalParams    Optional parameters to log.
     */
    static log(text: string, ...optionalParams: any[]): void {
        let style = this.STYLE.BASE.join(';');
        console.log(`%c${text}`, style, ...optionalParams);
    }
}


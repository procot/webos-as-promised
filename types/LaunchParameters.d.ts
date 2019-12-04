export interface LaunchParameters {
  /**
   * The app ID or webOSDev.APP
   */
  id: string;

  /**
   * The JSON data object to pass when launching an app
   */
  params: object;
}
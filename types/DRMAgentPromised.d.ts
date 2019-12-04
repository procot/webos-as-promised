import {
  DRMError,
  DRMType,
  GetRightsErrorResponse,
  IsLoadedResponse,
  LoadResponse,
  SendDrmMessageParams,
  SendDrmMessageResponse
} from './drm';
import {AsyncMethodReturnType} from './common';

export interface DRMAgentPromised {
  /**
   * Returns a client ID of DRM.
   */
  getClientId(): string;

  /**
   * Returns a DRM type to be set.
   */
  getDrmType(): DRMType[keyof DRMType];

  /**
   * Returns an error code from the DRM service.
   */
  getErrorCode(): DRMError[keyof DRMError];

  /**
   * Returns a text represented by an error from the DRM service.
   */
  getErrorText(): string;

  /**
   * Returns error information when an error of the DRM license occurs during content playback.
   * This method is supported in the following DRM type only:
   * - PlayReady
   */
  getRightsError(): AsyncMethodReturnType<GetRightsErrorResponse>;

  /**
   * Checks whether a DRM client that corresponds to given application ID exists.
   */
  isLoaded(): AsyncMethodReturnType<IsLoadedResponse>;

  /**
   * Creates a client instance for a certain type of DRM.
   * The DRM type is specified when a DRM agent is created.
   */
  load(): AsyncMethodReturnType<LoadResponse>;

  /**
   * Sends a DRM message to a DRM service.
   * After receiving the message, the DRM service starts to parse the message and perform the DRM operation.
   */
  sendDrmMessage(params?: SendDrmMessageParams): AsyncMethodReturnType<SendDrmMessageResponse>;

  /**
   * Removes a DRM client instance and deallocates relevant resources.
   */
  unload(): AsyncMethodReturnType<{}>;
}
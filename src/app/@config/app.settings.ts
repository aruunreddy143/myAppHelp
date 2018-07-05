export class AppSettings {

    public static hostUrl="http://localhost:5000";
    public static loginApi= AppSettings.hostUrl+"/api/authenticate";
    public static registerApi=AppSettings.hostUrl+"/api";
    public static resetPasswordApi=AppSettings.hostUrl+"/api/reset";
    public static forgotPasswordApi=AppSettings.hostUrl+"/api/forgot_password";
    public static emailAlreadyExits=AppSettings.hostUrl+"/api/emailAlreadyExists";

}
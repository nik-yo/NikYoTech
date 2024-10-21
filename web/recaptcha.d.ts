declare module 'grecaptcha' {
  const grecaptcha: ReCaptchaV3;
  export default grecaptcha;
}

interface ReCaptchaV3 {
  execute(siteKey: string, options: { action: string }): Promise<string>;
  ready(callback: () => void): void;
}

interface Window {
  grecaptcha?: ReCaptchaV3;
}

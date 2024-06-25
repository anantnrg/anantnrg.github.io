import { useNuxtApp } from '#app';

export const useColorMode = () => {
  const nuxtApp = useNuxtApp();
  const colorMode = useState<string>('color-mode', () => nuxtApp.$colorMode.value);

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', colorMode.value === 'dark');
    document.documentElement.classList.toggle('light', colorMode.value === 'light');
  });

  return {
    colorMode
  };
};
const useClipboard = () => async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export default useClipboard;

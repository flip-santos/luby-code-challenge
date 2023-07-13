import { ref, onBeforeUnmount } from "vue";

export const useCurrentTime = () => {
  const dateOptions = {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }
  const currentTime = ref(new Date().toLocaleString('en-US', dateOptions));
  
  const updateCurrentTime = () => {
    currentTime.value = new Date().toLocaleString('en-US', dateOptions);
  };
  
  const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });
  
  return {
    currentTime,
  };
};
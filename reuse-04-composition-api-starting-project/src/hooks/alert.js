import { ref } from 'vue';

export default function useAlert(startingVisibility = false) {
  const alertIsVisible = ref(startingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [                //return može biti object može i array
    alertIsVisible,
    showAlert,
    hideAlert,
  ];
}

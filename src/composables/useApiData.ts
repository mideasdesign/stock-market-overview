import { ref, onMounted } from 'vue'
export function useApiData() {
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    try {
      loading.value = true
      const response = await fetch('https://sheetdb.io/api/v1/ia2bwmp00by8n?sheet=$SAP')
      const result = await response.json()
      data.value = result
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}

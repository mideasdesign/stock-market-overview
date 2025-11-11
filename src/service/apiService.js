export const apiService = {
  async fetchSheetData() {
    try {
      const response = await fetch('https://sheetdb.io/api/v1/ia2bwmp00by8n?sheet=$SAP'')
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }
}

import api from '../plugins/api'
import useAuthStore from '../stores/auth'

class WorkspaceService {
  async getAllWorkspaces() {
    const response = await api.get('/projetos/')
    return response.data
  }
  async saveWorkspace(workspace) {
    const authStore = useAuthStore()
    workspace.professor = authStore.user_id
    let response
    if (workspace.id) {
      response = await api.put(`/projetos/${workspace.id}/`, workspace)
    } else {
      response = await api.post('/projetos/', workspace)
    }
    return response.data
  }
  async deleteWorkspac(workspace) {
    const response = await api.delete(`/projetos/${workspace.id}/`)
    return response.data
  }
}

export default new WorkspaceService()

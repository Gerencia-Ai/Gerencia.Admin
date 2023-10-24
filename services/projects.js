import axios from 'axios';
export default class ProjetoApi {
  async buscarTodasAsProjetos() {
    const { data } = await axios.get('projeto/');
    return data;
  }
  async adicionarProjeto(projeto) {
    const { data } = await axios.post('/projeto/', projeto);
    return data;
  }
  async atualizarProjeto(projeto) {
    const { data } = await axios.put(`/projeto/${projeto.id}/`, projeto);
    return data;
  }
  async excluirProjeto(id) {
    const { data } = await axios.delete(`/projeto/${id}/`);
    return data;
  }
}
import axios from "./api";

export async function getAll(endpoint = '/products') {
    try {
        const res
eg= eno
        
        console.log(response)
        return [];
    } catch (e) {
        e?responde ? console.log(e.responde.date) : console..log(e);
    }
}

export async function getOne(id) {
    try {
      const response = await axios.get(`/posts/${id}`);
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
}
  

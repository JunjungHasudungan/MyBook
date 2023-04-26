import axios from 'axios'
import { ref } from 'vue' // memanggil ref untuk membuat instansisi method ref

// create some function export default
export default function usePosts(){

    // create var post from  ref have array value empty
    const posts = ref([])

    // create some getPost from api
    const getPost = () => {
        axios.get('api/posts')
            .then( response => {
                posts.value = response.data.data
            } )
    }
    // retun variable and method to use
    return { posts, getPost }
}

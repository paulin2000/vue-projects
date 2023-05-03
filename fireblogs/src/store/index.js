import {createStore} from 'vuex'
import firebase  from 'firebase/compat/app'
import "firebase/compat/auth"
import db from "@/firebase"
// Create a new store instance.
const store = createStore({
    state: {
        sampleBlogCards: [
            {
                blogTitle: "This is a filter Title!",
                blogCoverPhoto: "stock-1",
                blogDate: "May 1, 2023"
            },
            {
                blogTitle: "This is a filter Title!",
                blogCoverPhoto: "stock-2",
                blogDate: "May 1, 2023"
            },
            {
                blogTitle: "This is a filter Title!",
                blogCoverPhoto: "stock-3",
                blogDate: "May 1, 2023"
            },
            {
                blogTitle: "This is a filter Title!",
                blogCoverPhoto: "stock-4",
                blogDate: "May 1, 2023"
            }
        ],
        editPost: null,
        blogPosts: [],
        postLoaded: null,
        blogHTML: "Write your blog title here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileURL: null,
        blogPhotoPreview: null,
        // editPost: null,
        user: null,
        profileAdmin: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUsername: null,
        profileId: null,
        profileInitials: null,
    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload
            console.log(payload, "payload")
        }
    }
})

export default store

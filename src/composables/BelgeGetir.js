import {ref} from 'vue'
import {firestoreRef} from '../firebase/config'

const belgeGetir=(collection)=>{

    const documents=ref(null)

    let collectionRef=firestoreRef.collection(collection);


    collectionRef.onSnapshot(snap=>{
        let results=[];

        snap.docs.forEach(doc=>{
            results.push({...doc.data(),id:doc.id})

        })
        //console.log(results)
        documents.value=results
    },err=>{
        console.log(err.message);
    })

    return {documents}
}

export default belgeGetir
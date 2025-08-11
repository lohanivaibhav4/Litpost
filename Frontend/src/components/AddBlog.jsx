export default function AddPost(){
    return(
        <div className="container m-auto w-[50vw] border border-secondary rounded-lg my-4 p-4">
            <form className="flex flex-col my-4 gap-4">
                <input type="file" name="coverImage" />
                <input type="text" name="title" placeholder="Title..."/>
                <textarea 
                type="text" 
                name="body" 
                className="py-2 px-4 bg-primary"
                placeholder="Write Something..."
                />
                <button type="submit">Publish</button>
            </form>

        </div>
    )
}
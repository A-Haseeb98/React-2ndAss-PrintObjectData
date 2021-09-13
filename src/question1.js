const obj = { name: "Hello World Object" }
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]


function Question() {
    return (
        <div >
            {/* obj */}
            <h1>{obj.name}</h1>
            {/*   data */}
            {data.map((value, index) => {
                return (
                    <h2 key={index}>{value}</h2>
                )
            })}
            {/* list */}
            {list.map((value, index) => {
                return (
                    <h2 key={index}>{value.name}</h2>
                )
            })}
            {/* complex */}
            {complex.map((value, index) => {
                return (
                    <div key={index}>

                        <h1>{value.company}</h1>
                        {value.jobs.map((value, index) => {
                            return (
                                <p key={index}>{value}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Question
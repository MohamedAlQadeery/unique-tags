const data = [
    {
        id: 1,
        title: "Stranger Scrims", 
        duration: 40, 
        tags: ["supernatural", "horror", "drama"], 
    },
    {
        id: 2,
        title: "The Scrim of the Dragon", 
        duration: 60, 
        tags: ["drama", "fantasy"], 
    },
    {
        id: 3,
        title: "Scrim Hunters", 
        duration: 22, 
        tags: ["reality", "home improvement"], 
    },
    {
        id: 4,
        title: "This Old Scrim", 
        duration: 30, 
        tags: ["reality", "home improvement"], 
    },
    {
        id: 5,
        title: "What We Do in the Scrim", 
        duration: 55, 
        tags: ["drama", "comedy", "supernatural"], 
    },
    {
        id: 6,
        title: "The Scrimdalorian", 
        duration: 58, 
        tags: ["fantasy", "sci-fi", "adventure"], 
    },
]



function getUniqueTagsBruteForce(data) {
    let tags = []
    data.forEach((item) => {
        item.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })
    return tags
}

function getUniqueTagsUsingSet(data) {
    let tags = new Set()
    data.forEach((item) => {
        item.tags.forEach((tag) => {
            tags.add(tag)
        })
    })
    return tags
}

function getUniqueTags(data) {
    const flatendTags = data.map(item=>item.tags).flat();
    const uniqueTags = flatendTags.filter((item,index)=>flatendTags.indexOf(item)===index);
    return uniqueTags;
}




console.log(data);



console.log('brute force',getUniqueTagsBruteForce(data));
console.log('using set',getUniqueTagsUsingSet(data));
console.log('best solution ',getUniqueTags(data));



exports.boxPO = (data) => {
    return {
        name: data.name,
        content: data.content
    }
}

exports.boxTO = (doc) => {
    return {
        id: doc._id, 
        name: doc.name, 
        content: doc.content
    }
}

exports.update = (data) => {
    return {$set: {content: data.content}};
}
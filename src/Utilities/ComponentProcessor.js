export const componentProcessor = (data) => {
    let sectionsArr = [];
    let rowsArr = [];
    let columnsArr = [];
    let itemsArr = [];
    const componentsCollector = (elem) => {
        for (let i = 0; i < elem?.length; i++) {
            if (elem[i].type === 'section') {
                sectionsArr.push({
                    name: elem[i].name,
                    type: elem[i].type,
                    id: elem[i].id
                })
            }
            if (elem[i].content) {
                for (let n in elem[i].content) {
                    let element = elem[i].content[n]
                    if (elem[i].type === 'section') {
                        rowsArr.push({
                            name: element.name,
                            type: element.type,
                            id: element.id
                        })
                    }
                    if (elem[i].type === 'row') {
                        columnsArr.push({
                            name: element.name,
                            type: element.type,
                            id: element.id
                        })
                    }
                    if (elem[i].type === 'column') {
                        if (element.type === 'heading') {
                            itemsArr.push({
                                name: element.name,
                                titleType: element.titleType,
                                type: element.type,
                                id: element.id,
                                content: element.content
                            })
                        }
                        if (element.type === 'image') {
                            itemsArr.push({
                                name: element.name,
                                type: element.type,
                                id: element.id,
                                attr: element.attr
                            })
                        }
                        if (element.type === 'text') {
                            itemsArr.push({
                                name: element.name,
                                type: element.type,
                                id: element.id,
                                content: element.content
                            })
                        }
                        if (element.type === 'subscription') {
                            itemsArr.push({
                                name: element.name,
                                type: element.type,
                                id: element.id,
                                form: element.form,
                                fieldItems: element.form.fields.items,
                            })
                        }
                        if (element.type === 'button') {
                            itemsArr.push({
                                name: element.name,
                                type: element.type,
                                id: element.id,
                                content: element.content,
                            })
                        }
                    }
                }
                componentsCollector(elem[i].content)
            }
        }
    }
    componentsCollector(data)
    return { sectionsArr, rowsArr, columnsArr, itemsArr };
};

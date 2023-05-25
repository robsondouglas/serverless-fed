export  class ScheduleManager {
    constructor(){

    };
    setDefaultQuery(query){ console.log('setDefaultQuery', query) }
    
    executeLocal(query){console.log('executeLocal', query)}
    executeQuery(query, done, fail, always){ console.log('executeQuery', query, done, fail, always) }
    saveChanges(changes, key, tableName, query, original){console.log('saveChanges', changes, key, tableName, query, original)};
    insert(data, tableName, query, position){ console.log('insert', data, tableName, query, position) };
    remove(keyField, value, tableName, query){ console.log('remove', keyField, value, tableName, query) }
    update(keyField, value, tableName, query, original){ console.log('update', keyField, value, tableName, query, original) }
    
}
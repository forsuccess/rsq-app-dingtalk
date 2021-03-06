import Vue from 'vue'

export default {
	/**
	 * 将path中的params替换为props中的相应属性值
	 * @param path
	 * @param props
	 */
	replaceUrlParams(path, props){
		let exp = /:(\w+)/g
		let res
		let newPath = path

		while((res = exp.exec(path)) !== null){
			var prop = res[1]
			newPath = newPath.replace(':' + prop, encodeURIComponent(props[prop]))
		}
		return newPath
	},
	/**
	 * 将params对象中的参数组合成a=b&c=d的形式
	 * @param params
	 */
	combineUrlParams(params){
		var str = []
		for(let p in params){
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]))
		}
		return str.join("&")
	},
	/**
	 * 将obj1和obj2合并成一个“新”的obj，并返回。如果obj1和obj2拥有相同的属性，obj2会覆盖obj1的属性，
	 * 本方法只执行浅合并
	 * @param obj1
	 * @param obj2
	 * @returns obj3 a new object based on obj1 and obj2
	 */
	mergeObject(obj1, obj2){
		var obj3 = {}
		for (let attrName in obj1) {
			obj3[attrName] = obj1[attrName];
		}
		for (let attrName in obj2) {
			obj3[attrName] = obj2[attrName];
		}
		return obj3
	},
	/**
	 * 将props中的属性添加到obj中，只有props中的浅属性会被添加到obj中，
	 * 由于Vue.js中不能检测到属性的添加，因此，如果props包含的属性在obj中不存在，
	 * 则需要使用Vue.js提供的方法进行set，保证数据的响应
	 * @param obj
	 * @param props
	 */
	extendObject(obj, props){
		if(!obj) return null
		props = props || {}
		for(let prop in props) {
			if(props.hasOwnProperty(prop)) {
				if(obj[prop] == undefined){
					Vue.set(obj, prop, props[prop])
				}else{
					obj[prop] = props[prop]
				}
			}
		}
		return obj
	},
	/**
	 * 根据array中object的id查找元素
	 * @param array
	 * @param id
	 * @returns {*|T}
	 */
	findById(array, id){
		array = array || []
		var i
		for(i = 0; i < array.length; i++){
			if(array[i].id === id){
				return array[i]
			}
		}
	},
	/**
	 * 根据array中object的id删除元素
	 * @param array
	 * @param id
	 * @returns {Array.<T>|*}
	 */
	deleteById(array, id){
		var index = -1
		for(let i=0; i<array.length; i++){
			if(array[i].id === id){
				index = i
			}
		}
		if(index > -1){
			return array.splice(index, 1)[0]
		}
	},
	getNextOrder(orderList, orderProps){
		orderList = orderList || []
		if(orderList.length == 0){
			return 65535
		}else{
			let last = orderList[orderList.length - 1]
			return last[orderProps] + 65536
		}
	},
	/**
	 * 比较array1和array2，返回数据包括：
	 * 1  array2相比array1新增的数据
	 * 2  array2相比array1删除的数据
	 * 以id作为唯一标记，暂不对比数据是否更改
	 * @param array1
	 * @param array2
	 */
	compareArray(array1, array2){
		var interSectId = []
		var self = this
		array1.forEach(function(obj){
			if(self.findById(array2, obj.id)){
				interSectId.push(obj.id)
			}
		})
		var notExist = function(obj){
			return interSectId.indexOf(obj.id) == -1
		}
		var deleted = array1.filter(notExist)
		var added = array2.filter(notExist)

		return {
			added: added,
			deleted: deleted
		}
	},

	/**
	 * 将obj插入到targetList中，插入的位置根据funcCompare来判断，obj会插入到满足funcCompare为true的第一个位置上
	 * @param targetList
	 * @param obj
	 * @param funcCompare
	 */
	insertOrderList(targetList, obj, funcCompare){
		var newIndex = 0
		for(var i = 0; i < targetList.length; i++){
			var thisPlan = targetList[i]
			if(funcCompare(thisPlan, obj)){
				break
			}
			newIndex = i + 1
		}
		targetList.splice(newIndex, 0, obj)
	},
	/**
	 * 从list中找到属性prop的值为value的项
	 * @param list
	 * @param prop
	 * @param value
	 * @returns {*}
	 */
	findByProperty(list, prop, value){
		for(var i = 0; i < list.length; i++){
			if(list[i][prop] === value){
				return list[i]
			}
		}
		return null
	},
	/**
	 * 从array的object元素中提取出prop属性
	 * @param array
	 * @param prop
	 */
	extractProp(array, prop){
		return array.map(function(obj){
			return obj[prop]
		})
	},
	/**
	 * 从map中提取出有value object 中的prop组成的数组
	 * @param array
	 */
	getMapValuePropArray(map, prop){
		var dataArray = []
		for(var o in map) {
			if(prop){
				dataArray.push(map[o][prop])
			}else{
				dataArray.push(map[o])
			}
		}
		return dataArray
	},
	/**
	 * 比较旧的list和新的list二者之间的差异
	 * @param oldList
	 * @param newList
	 * @returns {{addList: Array, delList: Array}}
	 */
	compareList(oldList, newList){
		oldList = oldList || []
		newList = newList || []
		var addList = [], deleteList = []
		oldList.forEach(function(oldVal){
			if(-1 == newList.indexOf(oldVal)){
				deleteList.push(oldVal)
			}
		})
		newList.forEach(function(newVal){
			if(-1 == oldList.indexOf(newVal)){
				addList.push(newVal)
			}
		})

		return {
			addList: addList,
			delList: deleteList
		}
	}
}

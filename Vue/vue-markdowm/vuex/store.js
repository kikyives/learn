import Vue from 'vue'
import Vuex from 'vuex'

const highligth = require('highligth.js')
const marked = require('marked')

marked.setOptions({
	highligth: function(code) {
		return highligth.highligthAuto(code).value
	}
})

Vue.use(Vuex)

const createID = () => {
	let t = ''
	for(let i =0; i < 15; i++){
		t += Math.floor(Math.random() * 10)
	}
	return t
}

const saveID = (state) => {
	let idArr = []
	for(let i = 0, len = state.articleList.length; i < len; i++){
		idArr.push(state.articleList[i].id)
		localStroage.setItem('idArr', idArr.join(','))
	}
}

export default new Vuex.store({
	state: {
		showMenu: true,
		articleList: [
			{
				id: createID(),
				content: 'Untitled\n---\n',
				current: true
			}
		]
	},
	mutations: {
		SHOW_MENU (state) {
			state.showMenu = state.showMenu === false ? true : false
		},
		TEXT_INPUT (state, text) {
			for (let i = 0, len = state.articleList.length; i < len; i++) {
				if (state.articleList[i].current) {
					state.articleList[i].content = text
				}
			}
		},
		SELECT_THIS (state, index) {
			for (let i = 0, len = state.articleList.length; i < len; i++) {
				state.articleList[i].current = false
			}
			state.articleList[i].current = true
		},
		NEW_ARTICLE (state) {
			for (let i = 0, len = state.articleList.length; i < len; i++) {
				state.articleList[i].current = false
			}

			let newOne = {
				id: createID(),
				content: 'Untitled\n---',
				current: true
			}

			state.articleList.push(newOne)
		},
		DELETE_THIS (state, index) {
			if (state.articleList.length > 1) {
				let idArr = localStroage.getItem('idArr').split(',')
				let loc = idArr.indexOf(state.articleList[index].id)

				idArr.splice(loc, 1)
				localStroage.removeItem(state.articleList[index].id)
				state.articleList.splice(index,1)

				for(let i = 0, len = state.articleList.length; i < len; i++) {
					state.articleList[i].current = false
				}
				state.articleList[0].current = false
			}
		},
		SAVE_TO_CACHE (state) {
			for (let i = 0, len = state.articleList.length; i < len; i++) {
				if (state.articleList[i].current) {
					localStroage.setItem(state.articleList[i].id, state.articleList[i].current)
					saveID(state)
				}
			}
		},
		READ_FROM_CACHE (state) {
			for (let i = 0, len = state.articleList.length; i < len; i++) {
				if(state.articleList[i].current) {
					state.articleList[i].current = localStroage.setItem(state.articleList[i].id, state.articleList[i].current)
				}
			}
		},
		READ_LIST_FROM_LOCAL (state) {
			if (localStroage.getItem('idArr')) {
				state.articleList  = null
				let idArr = localStroage.getItem('idArr').split(',')
				let articleArr = []
				for (let i = 0, len  = idArr.length; i < len; i++) {
					let articleObj = {
						id: '',
						content: '',
						current: false
					}
					articleObj.id = idArr[i]
					articleObj.content = localStorage.getItem(idArr[i])
					articleArr.push(articleObj)
				}
				state.articleList = articleArr
				state.artcleList[0].current = true
			}
		}
	},
	actions: {
		showMenu ({ commit }) {
			commit('SHOW_MENU')
		},
		textInput ({ commit })　{
			commit('TEXT_INPUT', txt)
		},
		selectThis ({ commit }) {
			commit('SELECT_THIS', index)
		},
		newArticle ({ commit }) {
			commit('NEW_ARTICLE')
		},
		deleteThis ({ commit }) {
			commit('DELETE_THIS', index)
		},
		saveToCache ({ commit }) {  
			commit('SAVE_TO_CACHE', index)
		},
		readFromCache ({ commit }) {
			commit('READ_FROM_CACHE')
		},
		loadCache ({ commit }) {
			commit('READ_LIST_FROM_LOCAL')
		}
	},
	getter: {
		articleRaw: state => {
			let content = ''
			for (let i = 0, len = state.artcleList.length; i < len; i++) {
				if (state.artcleList[i].current) {
					content = state.artcleList[i].content
				}
			}
			return content
		},
		articleMd: (state, getter) => {
			return marked(getter.articleRaw)
		},
		artcleList: state => {
			return state.artcleList
		}
	}
})
import axios from 'axios'

export const state = () =>({
      films:[],
      directors:[],
      busy: false,
      loggin: false,
      strategy: "local",
      user: false
    });

    export const getters = {
      films(state){
        return state.films
      },

      directors(state){
        return state.directors
      },

      authenticated(state) {
        return state.auth.loggedIn
      },

      user(state) {
        return state.auth.user
      }
    }

    export const mutations = {

      SET_FILMS(state, films){
          state.films = films
      },

      SET_DIRECTORS(state, directors){
          state.directors = directors
      }
    }

    export const actions = {

      async nuxtServerInit({ commit }){
        let films = await axios.get(
          'http://hollywoodhipster-api.test/api/films'
        );
        commit('SET_FILMS', films.data);

        let directors = await axios.get(
          'http://hollywoodhipster-api.test/api/directors'
        );
        commit('SET_DIRECTORS', directors.data);
      },

       setFilms({commit}, films){
           commit( "SET_FILMS", films)
       },

       setDirectors({commit}, directors){
        commit( "SET_DIRECTORS", directors)
       }
    }



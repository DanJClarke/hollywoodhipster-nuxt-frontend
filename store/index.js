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

      ADD_FILM(state, film){
          state.films.push(film);
      },

      SET_DIRECTORS(state, directors){
          state.directors = directors
      },

      ADD_DIRECTOR(state, director){
        state.directors.push(director);
      },
    }

    export const actions = {

      async nuxtServerInit({ commit }){
        let films = await axios.get(
          'http://hollywoodhipster-api.test/api/films'
        );

        let { data: filmsData } = films.data;
        commit('SET_FILMS', filmsData );

        let directors = await axios.get(
          'http://hollywoodhipster-api.test/api/directors'
        );
        let { data: directorData } = directors.data;
        commit('SET_DIRECTORS', directorData);
      },

      setFilms({commit}, films){
           commit( "SET_FILMS", films)
      },

      addFilm({commit}, film){
          commit( "ADD_FILM", film)
      },

      setDirectors({commit}, directors){
        commit( "SET_DIRECTORS", directors)
      },

      addDirector({commit}, director){
        commit( "ADD_DIRECTOR", director)
      }
    }



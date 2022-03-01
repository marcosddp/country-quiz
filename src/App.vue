<template>
  <div id="container">
    <h1>Country quiz</h1>
    <div id="container-quiz">
      <div v-if="statusQuiz.correct == true || statusQuiz.correct == null ">
        <img
          id="img-adventure"
          src="@/assets/undraw_adventure.svg"
          alt="undraw_adventure_4hum"
        />

        <ContainerQuiz
          v-if="isLoading == true"
          :question="question"
          @getResolve="setResolve"
          :key="keyQuestion"
        />

        <Spinner v-if="isLoading == false" />
        <Error404 v-if="isLoading == 404" />
      </div>
      <div v-if="statusQuiz.correct == false">
        <Result :result="correctAnswers"   @tryAgain="resetQuiz"/>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import ContainerQuiz from "@/components/containerQuiz";
import Error404 from "@/components/Error404";
import Result from "@/components/Result";
import filters from "@/scripts/filters.js";
import generateQuestion from "@/scripts/generateQuestion";
import restCountries from "@/api/index.js";

export default {
  name: "App",

  components: {
    Spinner,
    ContainerQuiz,
    Error404,
    Result,
  },

  data() {
    return {
      keyQuestion: 0,
      esperar: 888,
      countrys: [],
      isLoading: false,
      question: null,
      correctAnswers: 0,
      statusQuiz: {
        correct: null,
        resolve: null,
      },
    };
  },/*
  computed: {
    failedAnswers() {

      if(statusQuiz.correct===false){



      }

    },
  },*/
  methods: {
    forceRerender() {
      this.keyQuestion += 1;
    },
    async getCountry() {
      let result = null;
      try {
        result = await restCountries();
        this.countrys = filters(result);
        this.isLoading = true;
        this.newQuestion(this.countrys);
      } catch {
        this.isLoading = 404;
      }
    },

    newQuestion(countrys) {
      if (this.question) {
        this.forceRerender();
      }
      this.question = generateQuestion(countrys);
    },
    resetQuiz(rs) {
      this.statusQuiz.correct = rs.correct;
      this.statusQuiz.resolve = rs.resolve;
      this.correctAnswers=0
      this.newQuestion(this.countrys);
    },
    setResolve(statusQuiz) {
      this.statusQuiz.correct = statusQuiz.correct;
      this.statusQuiz.resolve = statusQuiz.resolve;

      if (this.statusQuiz.correct) {
        this.correctAnswers++;
      }
      this.newQuestion(this.countrys);
    },
  },

  mounted() {
    this.getCountry();
  },
};
</script>

<style>
@import "./styles/style.css";
</style>

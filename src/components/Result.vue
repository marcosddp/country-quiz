<template>
  <div id="result-quiz">
    <img
      id="undraw_winners"
      src="@/assets/undraw_winners.svg"
      alt="undraw_winners"
    />

    <h2>Results</h2>

    <p>
      You got <span> {{ result }} </span> correct answers
    </p>

    <button id="try_again" @click="tryAgain">Try Again</button>
  </div>
</template>

<script>
export default {
  name: "Result",
  emits: ["tryAgain"],
  props: {
    result: Number,
  },
   methods:  {
    tryAgain() { 
      this.$emit("tryAgain", {
      statusQuiz: {
        correct: null,
        resolve: null,
      },
      });
    },
  },
};
</script>

<style scoped>
#result-quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 325px;
}

#undraw_winners {
  width: 238px;
  height: 136px;
  margin-bottom: 58px;
}

#try_again {
  width: 209px;
  /*height: 94px;*/
  height: 62px;
  border: 2px solid #1d355d;
  box-sizing: border-box;
  border-radius: 12px;

  margin-top: 69px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #1d355d;
}

#try_again:hover {
  border: 2px solid #305391;
  color: #305391;
}

#try_again:active {
  transform: scale(0.9459);
}

#result-quiz h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */
  margin-bottom: 13.75px;

  color: #1d355d;
}

#result-quiz p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;

  color: #1d355d;
}

#result-quiz span {
  color: #6fcb94;
  font-size: 36px;
  border: #659c7b 0.5px 0.25px;
  font-weight: bold;
}
</style>

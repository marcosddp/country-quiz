<template>
  <Question :questionTitle="question.questionTitle" />

  <div class="answers">
    <div v-for="(answer, index) in question.answers" :key="answer">
      <div @click="resolveQuiz(index)" class="answer wave" ref="aws">
        <span>{{ ABC(index) }}</span>
        <p>{{ concatArray(answer) }}</p>
      </div>
    </div>
  </div>
  <div
    v-if="resolved"
    @click="next"
    style="display: flex; justify-content: right"
  >
    <button id="next"><p>Next</p></button>
  </div>
</template>

<script>
import Question from "@/components/Question";
export default {
  name: "containerQuiz",
  props: {
    question: Object,
  },
  emits: ["getResolve"],
  data() {
    return {
      resolved: false,
      correct: null,
      

    };
  },

  components: {
    Question,
  },
  methods: {
   
    ABC(index) {
      const abc = ["A", "B", "C", "D", "E", "F", "G"];
      return abc[index];
    },
    concatArray(array) {
      if (Array.isArray(array)) {
        return array.toString();
      }
      return array;
    },

    next() {
      this.$emit("getResolve", {
        resolve: this.resolved,
        correct: this.correct,
      });
    },

    resolveQuiz(i) {
      if (!this.resolved) {
        let select = this.$refs.aws[i].classList;
        if (this.question.answers[i] === this.question.trueAnswer) {
          select.add("trueAnswer");
          this.correct = true;
        } else {
          select.add("falseAnswer");
          this.correct = false;
        }

        this.question.answers.findIndex(
          (elem) => elem === this.question.trueAnswer
        );

        for (let elem of this.$refs.aws) {
          let refElem = elem.classList;
          let trueIndex = this.question.answers.findIndex(
            (elem) => elem === this.question.trueAnswer
          );

          refElem.remove("wave");

          if (!this.correct) {
            let selectTrue = this.$refs.aws[trueIndex].classList;
            selectTrue.add("trueAnswer");
          }
        }

        this.resolved = true;
        //this.emitResolve();
      }
    },
  },
};
</script>

<style scoped>
#next {
  width: 116px;
  height: 56px;
  border: transparent;
  background: #f9a826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
}

#next p {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
}

#next:hover {
  background: #ffbc51;
  color: #dad6d6;
}

#next:active {
  transform: scale(0.9459);
}

.answer {
  width: 400px;
  height: 56px;
  margin: 25px 0px;
  background: #ffffff;
  overflow: hidden;
  border: 2px solid rgba(96, 102, 208, 0.7);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  /* identical to box height */

  color: rgba(96, 102, 208, 0.8);
}

.wave:hover {
  background: #f9a826;
  color: white;
}

.answer span {
  /*
  position: absolute;
width: 83px;
height: 27px;
left: 602px;
top: 484px;*/
  margin-left: 19px;
  margin-right: 46px;
}

.trueAnswer {
  background: rgb(96, 191, 136);
  border: transparent;
  color: white;
}

.falseAnswer {
  background: #ea8282;
  border: transparent;
  color: white;
}
</style>

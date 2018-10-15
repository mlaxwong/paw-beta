<template>
    <div class="loader" :class="{'show': this.isShow, 'blackout': this.isBlackOut}">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        blackOut: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        isShow() {
            return this.show;
        },
        isBlackOut() {
            return this.blackOut;
        }
    }
}
</script>

<style>
.loader {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 10;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear, background-color 0.5s linear;
}

.loader.show {
  visibility: visible;
  opacity: 1;
}

.loader.show.blackout {
  background-color: rgba(238, 238, 238, 1);
}

.spinner {
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}

.spinner > div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;
  
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 10s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>

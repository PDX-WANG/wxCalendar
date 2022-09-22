<template>
    <section class="wxCalendar">
      <div class="wxCalendarHead">
        <div class="wxCalendarGrid" v-for="week in wx_week_lists">
          {{week}}
        </div>
      </div>
      <div class="wxCalendarMain">
        <div class="wxCalendarGrid" v-for="date in wx_date_lists">
          <div class="">{{date.day}}</div>
        </div>
      </div>
    </section>
</template>
<script setup>
  import obj from "./PageMain"
  const props = defineProps(["wxFirstDay"]);
  
  console.log(props);
  
  const {PageMain,btn,wx_date_lists,wx_week_lists} = obj;
  console.log(PageMain)
</script>
<style lang="scss" scoped>
  $border-out:#B6595E;
  $border-in:#97989B;
  %d-flex{
    display: box;              /* OLD - Android 4.4- */
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */ 
  }
  %f-direction{
    flex-direction:column;
  }
  @mixin flex($css){
    -webkit-box-flex: $css;      /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: $css;         /* OLD - Firefox 19- */
    -webkit-flex: $css;          /* Chrome */
    -ms-flex: $css;              /* IE 10 */
    flex: $css;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }
  %f-wrap{
    -webkit-box-flex-wrap: wrap;
    -moz-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
  }
  .wxCalendar{
    border: solid 2px $border-out;
    @extend %d-flex;
    @extend %f-direction;
    height:100%;
    .wxCalendarHead{
      @extend %d-flex;
      @include flex(0 0 40px);
      border-bottom: solid 2px $border-out;
      .wxCalendarGrid{
        @include flex(1 1 14%);
        text-align:center;
      }
    }
    .wxCalendarMain{
      @extend %d-flex;
      @extend %f-wrap;
      @include flex(1);
      .wxCalendarGrid{
        position: relative;
        @include flex(1 1 14%);
        &::before{
          content:" ";
          position: absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          border-right:solid 1px $border-in;
          border-bottom:solid 1px $border-in;
        }
        &:nth-child(7n)::before{
          border-right:0;
        }
      }
    }
  }
</style>
import { reactive,nextTick } from "vue"
import moment from 'moment'
const obj = {};
//日历一周首日为周几
const wxFirstDay = 0;
const wxWeekNames = ["SUN 日","MON 一","TUE 二","WED 三","THU 四","FRI 五","SAT 六"];

//创建日期集合
const createCalendarList = (date)=>{
    //设置当前月份的开始日期和结束日期
    const date_start = moment(date).date(1);
    const date_end = date_start.clone().add(1,'M').subtract(1,'d');
    //获取当前月份有多少天
    const dates = date_end.date(),date_list = [];
    for (let index = 1; index <= dates; index++) {
        const date = date_start.clone().date(index);
        date_list.push({
            day:date.format("D"),
            date:date.format("YYYY-MM-DD"),
            moment:date
        });
    }
    //补全空日期
    for (let index = 0; index < date_start.day() ; index++){
        const date = date_start.clone().subtract(index+1,'d');
        date_list.unshift({
            day:date.format("D"),
            date:date.format("YYYY-MM-DD"),
            moment:date
        });
    }
    for (let index = 0; (date_end.day()+index) < 6 ; index++){
        const date = date_end.clone().add(index+1,'d');
        date_list.push({
            day:date.format("D"),
            date:date.format("YYYY-MM-DD"),
            moment:date
        });
    }
    return date_list;
}
obj.wx_date_lists = createCalendarList("2022-09-20");
obj.wx_week_lists = wxWeekNames;
// console.log(obj.wx_date_lists);
obj.PageMain = reactive({
    count:0,
    aaa:{count:0},
    arr: ['foo', 'bar'],
    ttt:{
        bbb:['fff']
    }
})
obj.btn = ()=>{
    console.log(moment());
    obj.PageMain.count++;
    obj.PageMain.aaa.count++;
    obj.PageMain.arr.push("321");
    obj.PageMain.ttt.bbb.push("3555");
}
export default obj
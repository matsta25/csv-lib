<template>
  <div id="app">
  <div id="app-wrapper">
      <div id="scene">
          <img class="slide img-back" data-depth="0.05" src="../assets/jpk-back.png">
          <div class="slide img-front" data-depth="0.3">
            <img alt="JPK logo" src="../assets/jpk-front.png">
          </div>
            <div class="input-section slide button">
              <FormFile
                @modalRun="modalRun"
              />
            </div>
      </div>
  </div>

  <b-modal v-model="modalShow">
      <div id="table-content"></div>
      <download-excel
            class   = "btn btn-default"
            :data   = "json_data"
            :fields = "json_fields"
            name    = "ExcelJpk.xls">
        
            Download Excel
        
        </download-excel>
        <download-excel
            class   = "btn btn-default"
            :data   = "json_data"
            :fields = "json_fields"
            name    = "ExcelJpk.xls"
            type  = "csv"
            >
        
            Download CSV
        
        </download-excel>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import FormFile from '@/components/FormFile.vue'

import Parallax from 'parallax-js'

export default {
  name: 'home',
  components: {
    FormFile
  },
  data () {
      return {
        modalShow: false,
        value: '',
        json_fields: {
            'JPK': 'wartosc2'
        },
        json_data: [],
        json_meta: [
            [
                {
                    'key': 'charset',
                    'value': 'utf-8'
                }
            ]
        ],
      }
    },
  mounted: function () {
    let scene = document.getElementById('scene')
    let parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      calibrateX: true,
      calibrateY: true
    });
  },
  methods: {
    modalRun(value) {
      this.modalShow = !this.modalShow;
      this.value = value;

      this.createTable(value);
    },
    createTable(o){
      const f = function (o) { // funkcja splaszczajaca
      const r = {};
      for (const i in o)
        if (i in o)
          if (typeof o[i] === 'object') {
            const s = f(o[i]);
            for (const j in s) j in s && (r[i + '.' + j] = s[j]);
          } else r[i] = o[i];
      return r;
    };

    const t = document.createElement('table'); // inicjalizacja tablic i rzedow
          


    t.classList.add("table");

    o = f(o);

    for (const i in o) { // petla filtrujaca
      if (i.match('data.tns:JPK.tns')) {  // reszta properties nie jest istotna
        const r1 = document.createElement('tr');

        t.appendChild(r1);
        const a = document.createElement('td');
        const b = document.createElement('td');
        a.innerHTML = i.match(/.*:(.*)\.0$/) ? i.match(/.*:(.*)\.0$/)[1] : 'brak';
        b.innerHTML = o[i];
        let klucz = a.innerHTML;

        console.log(a.innerHTML + ' - ' + b.innerHTML);

        let wartosc2 = b.innerHTML;
          let obj2 = {
            // wartosc2: klucz + '.' +  wartosc2
            wartosc2: wartosc2
          };
        this.json_data.push(obj2)
        r1.appendChild(a);
        r1.appendChild(b);
      }
    }
    document.querySelector('#table-content').appendChild(t);
    
    }
  }
}

</script>

<style>

#app{
  display: table;
  height: 100%;
  width: 100%;
}

#app-wrapper{
display: table-cell;
vertical-align: middle;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #4f5b69, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #ffffff, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
pointer-events: none ;
}

#scene{
      position: relative;
}

.slide {
      position: absolute;
}

.img-back{
  left: calc(50% - 200px) !important;
  top: calc(50% - 200px) !important;
  }

.img-front{
  left: calc(50% - 200px) !important;
  top: calc(50% - 228px) !important;
}

.input-section{
  position: absolute !important;
  left: calc(50% - 80px) !important;
  top: calc(50% + 200px) !important;
}

[type="file"]{
  display: inline;
}

.button{
  z-index: 10 !important;
  pointer-events: all;
}

.table td{
  border: solid black 1px;
}

#__BVID__7___BV_modal_footer_{
  display: none;
}

.btn{
  margin: 0 15px !important;
}

#__BVID__7___BV_modal_header_{
  display: none;
}

</style>

import { Bar } from 'react-chartjs-2'

import{Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'

const Graphic = ({hp, attack, defense, spAttack, spDefense}) => {

    ChartJS.register(
        BarElement, CategoryScale, LinearScale, Tooltip, Legend
    )

    const data = {
        labels: ['hp', 'Attack', 'Sp.attack' ,'Defense',  'Sp.Defense' ],
        datasets: [
            {
            label: 'atributos',
            data: [hp, attack, defense, spAttack, spDefense],
            backgroundColor: 'rgb(252, 165, 165)',
            fill: true,
            borderColor: 'rgb(0, 0, 0)',
            boderWidth: 1,

            }
        ]
    }

    const options ={

    }

  return (
  <Bar className='w-full h-full' data={data} options={options}>
    
  </Bar>
  )
}

export default Graphic
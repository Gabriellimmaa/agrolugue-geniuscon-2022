import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import Dashboard from '../Dashboard';
import './styles.css';
import './calendarStyles.css';
import 'react-calendar/dist/Calendar.css';

interface ObjectItem {
  titulo: string;
  estado: string;
  icone: any;
}

interface CardsDashboardProps {
  objectList: ObjectItem[];
}

export function CardsDashboard({ objectList }: CardsDashboardProps) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="vendor-body">
      <div className="vendor-container flex-col items-start">
        <div className='pb-5'>
          <Dashboard/>
        </div>

        <div className='flex items-center'>
        <div className='vendor-content'>
            {objectList.map((data: ObjectItem) =>
              <div className="vendor-card">
                <div className="vendor-card-content">
                  <data.icone size={30} />
                  <h1>{data.titulo}</h1>
                  <h4>{data.estado}</h4>
                </div>
              </div>
            )}
          </div>
          <div className='flex justify-center'> 
            <div className="vendor-calendar ">
                <div className='calendar-content'>
                  <div className='flex justify-center rounded-t-2xl mb-2 text-base text-zinc-500 bg-white '>
                    <a>Calendário</a>
                  </div>
                  <Calendar calendarType='Hebrew' onChange={setDate} value={date}/>
                </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}
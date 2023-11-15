'use client'
import TableThree from "@/components/Tables/TableThree";
import Dates from "@/components/Tables/Dates";
import { useState, useEffect } from "react";
export default function AppointmentTable(){

    const [date, setDate] = useState("")
    const [appointments, setAppointments] = useState([])

    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay 0-11 aralığında olduğu için +1 ekliyoruz.
      const day = String(date.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    }

    useEffect(() => {
      if (date){
          getAppointments();
      }
      }, [date]);
      
      async function getAppointments() {
        try {
          const properDate = formatDate(date)
          let path =`/auth/me/appointments/${properDate}`;
          const token = localStorage.getItem('token');

          const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
          }).then((response) => response.json());   
          setAppointments(response);

        } 
        catch (error) {
          console.error("Error:", error);
        }
      }

    return(
        <div>
            <Dates date={date} setDate={setDate}/>
            <TableThree appointments={appointments}/>
        </div>
    )
}
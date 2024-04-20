import { title } from "process"

const MissionCard = ({title,text}:any) => {
  return (
    <div className="bg-white p-8 py-12 rounded-4xl flex flex-col gap-4 items-center">
        <h2 className="font-semibold text-tt-red">
            {title}
        </h2>
        <p className="text-center font-[300] text-sm">
            {text}
        </p>
    </div>
  )
}

export default MissionCard
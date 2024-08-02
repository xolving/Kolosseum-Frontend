"use client"

import { useCallback, useState } from "react";
import allIssue from './data/issue.json';

export default function Home() {
    const [issues, setIssues] = useState<any[]>([])
    const [currentYear, setCurrentYear] = useState<number>(0)
    const years = Array.from({ length: 2024 - 1919 + 1 }, (_, index) => 1919 + index);

    const onClick = useCallback((year: number) => {
        setIssues(allIssue.filter(issue => issue.year == year))
        setCurrentYear(year)
    }, [])

  return (
    <main className="grid w-full">
        <div className="absolute w-full overflow-x-scroll scrollbar-hide">
            <div className="mt-10 mx-auto text-stone-500 [writing-mode:vertical-lr] px-10">
            {years.map(year =>
                <div onClick={() => {onClick(year);}} key={year} className={`${year == currentYear ? "text-4xl text-stone-700 font-black" : "text-2xl"} font-bold no-touch:hover:font-black no-touch:hover:text-4xl no-touch:hover:text-stone-700 duration-150`}>{year}</div>)
            }
            </div>
        </div>
        <div className="grid mt-[10rem] m-10">
            {issues.length !== 0 ? <div className="w-full mx-auto grid gap-10">
                <h1 className="text-4xl text-neutral-600 font-bold">{`${currentYear}년, ${issues.length}개의 기록`}</h1>
                {issues.map((issue) =>
                <div className="rounded-xl" key={issue.id}>
                    <h1 className="text-3xl text-red-950 font-bold">{issue.name}</h1>
                    <p className="text-xl font-medium">{issue.description}</p>
                </div>
            )}</div> : <div>
            <div className={'mb-5'}>    <h1 className="text-3xl text-red-950 font-bold">안녕하세요, 역사 기록 프로젝트</h1>
            <h1 className="text-3xl text-red-950 font-bold">Kolosseum입니다.</h1></div>
            <p className="text-xl font-medium">현재는 데이터가 정확하지 않을 수도 있으며 이슈 혹은 메일을 보내주시면 빠르게 추가하거나 수정하겠습니다.</p>
            <p className="text-xl font-medium">me@fodo.dev</p>
                </div>}
        </div>
    </main>
  );
}

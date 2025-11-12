import { FaBriefcase } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { DialogNewWorkspace, DialogNewBoard } from "../components/dialog/index";
import { useProject } from "@/features/projects/model/useProject";
import type { ApiError } from "@/features/auth/login/api/type";
import type { Project } from "@/features/projects/api/type";
import { useEffect, useState } from "react";
import { BoardOptionsMenu } from "../components/BoardOptionsMenu";
import { useBoardContext } from "../components/context/BoardContext";

export function HomeWidget() {
    const { boards } = useBoardContext();
    const { getAllProjectsOfUser } = useProject();
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        handleGetAllProjectsOfUser();
    }, []);
    const handleGetAllProjectsOfUser = async () => {
        try {
            const data = await getAllProjectsOfUser();
            setProjects(data);
        } catch (err) {
            const apiError = err as ApiError;
            alert(apiError.message);
            setProjects([]);
        }
    }
    return (
        <div className="flex-1 overflow-y-auto">
            <DialogNewBoard mode="edit" />
            {/* Header */}
            <div className="p-4 border-gray-200">
                <div className="border-gray-200 flex">
                    <h1 className="text-lg font-medium mx-4">Dashboard</h1>
                </div>
            </div>
            <div className="w-full h-px bg-gray-200 my-2"></div>

            {/* Main Content */}
            <div className="px-8 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="text-gray-500">Manage your workspaces and boards</p>
                    </div>
                    <DialogNewWorkspace />
                </div>
            </div>

            
            {(
                projects.length > 0 ? (
                projects.map((project) => (
                    <div key={project.id} className="px-8 mb-8">
                        {/* Project Header */}
                        <div className="flex items-center justify-between py-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center">
                                    <FaBriefcase className="mr-2 w-6 h-6" />
                                    <div className="text-lg font-semibold">{project.name}</div>
                                </div>
                                <div className="text-sm text-gray-500">{project.description}</div>
                                {/* <div className="text-sm text-gray-500">{project?.boards.length} boards</div> */}
                            </div>
                            <DialogNewBoard headerTitle="Create New Board" headerDescription="Create a new board to organize your project tasks and collaborate with your team." />
                        </div>
                        <div className="flex flex-wrap gap-4">
                        {/* Dữ liệu tĩnh tạm thời cho demo */}
                        {boards.map((board) => (
                            <div 
                                key={board.id}
                                className="group flex flex-col gap-2 border border-gray-200 shadow-sm rounded-lg p-5 w-[calc(25%-12px)] hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                
                                <div className="flex items-center gap-2">
                                    <svg 
                                        className="w-4 h-4 text-blue-600" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        aria-hidden="true"
                                    >
                                        <path d="M5 3v14"></path>
                                        <path d="M12 3v8"></path>
                                        <path d="M19 3v18"></path>
                                    </svg>
                                    <div className="text-md font-semibold text-gray-900">{board.name}</div>
                                        <BoardOptionsMenu boardId={board.id} />
                                </div>
                                <div className="text-sm text-gray-500">{board.description}</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-sm text-gray-500">
                                        {board.tasksCount} {board.tasksCount === 1 ? 'task' : 'tasks'}
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <BsPeople className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm">{board.membersCount}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                        {/* <div className="flex flex-wrap gap-4">
                            {project?.boards.length === 0 ? (
                                <div className="text-sm text-gray-500 py-2">
                                    No boards yet. Create a new board to get started!
                                </div>
                            ) : (
                                project?.boards.map((board) => (
                                    <div 
                                        key={board?.id}
                                        className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-lg p-5 w-1/4 hover:shadow-md transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg 
                                                className="w-4 h-4" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="24" 
                                                height="24" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                aria-hidden="true"
                                            >
                                                <path d="M5 3v14"></path>
                                                <path d="M12 3v8"></path>
                                                <path d="M19 3v18"></path>
                                            </svg>
                                            <div className="text-md font-semibold">{board.name}</div>
                                        </div>
                                        <div className="text-sm text-gray-500">{board?.name}</div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-500">3 tasks</div>
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <BsPeople className="w-4 h-4" />
                                                3
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div> */}
                    </div>
                ))
            ) : (
                <div className="text-sm text-gray-500 py-2 flex justify-center items-center ">
                    No projects yet. Create a new project to get started!
                </div>
            ))}
        </div>
    )
}
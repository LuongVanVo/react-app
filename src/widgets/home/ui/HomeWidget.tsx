import { FaBriefcase } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { DialogNewWorkspace, DialogNewBoard } from "../components/dialog/index";

export function HomeWidget() {
    return (
        <div className="flex-1 overflow-y-auto">
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

            <div className="px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center ">
                            <FaBriefcase className="mr-2 w-6 h-6" />
                            <div className="text-lg font-semibold">Company Workspace</div>
                        </div>
                        <div className="text-sm text-gray-500">Main company workspace</div>
                        <div className="text-sm text-gray-500">2 boards</div>
                    </div>
                    <DialogNewBoard />
                </div>

            {/* All boards */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-lg p-5 w-1/4 hover:shadow-md transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg>
                            <div className="text-md font-semibold">Project Alpha</div>
                        </div>
                        <div className="text-sm text-gray-500">Main project board</div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">3 lists</div>
                            <div className="flex items-center gap-1 text-gray-500"><BsPeople className="w-4 h-4" />2</div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
import { AxiosResponse } from "axios";
import { HttpRequest } from "../../http-request";

export class Projects {
    static async getProjects(): Promise<AxiosResponse>{
        return await HttpRequest.get('projects');        
    }

    static async deleteProject(projectID: string): Promise<AxiosResponse>{        
        return await HttpRequest.delete(`projects/${projectID}`);
    }
}


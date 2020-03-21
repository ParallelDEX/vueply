import FileModel from '../models/FileModel';

export interface FileState {
  files: Array<FileModel>;
  selectedFile: string;
}

export interface ProjectFileLink {
  displayName: string;
  projectName: string;
  fileTypes: Array<string>;
}

export interface ProjectState {
  currentProject: string;
  projectFilesLink: Array<ProjectFileLink>;
}

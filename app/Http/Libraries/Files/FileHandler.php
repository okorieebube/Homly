<?php

namespace App\Http\Controllers\Files;

use Exception;
use Illuminate\Support\Facades\Storage;

trait FileHandler{

    /**
     * File Upload Handler
     *
     * @param  mixed $files
     * @param  mixed $type
     * @return void
     */
    public function upload($files, $type){
        !is_array($files) && throw new Exception("No files selected");

        for($i=0; $i < count($files); $i++) {
            $file = $files[$i];

            !file_exists($file) && throw new Exception("No file uplaoded to save");
            
            $name= $type.$i.time().'.'.$file->getClientOriginalExtension();
            $path = $file->storeAs($type, $name);
            
            !$path && throw new Exception("File Could Not Be Saved");

            $file_array[$i]['name'] = $name;
            $file_array[$i]['path'] = $path;
        }
        
        return $file_array;
    }
    
    /**
     * Replace Files
     *
     * @param  mixed $files
     * @param  mixed $type
     * @param  mixed $oldFiles
     * @return void
     */
    public function replace($files, $type, $oldFiles, $hasFile){
        if ($oldFiles) {
            foreach ($oldFiles as $value) {
                Storage::delete($value->path);
            }   
        }
        
        if ($hasFile) {
            $uploaded_files = $this->upload($files, $type);
            return $uploaded_files;
        }

        return null;
    }

    public function delete($files){
        if ($files) {
            foreach ($files as $value) {
                Storage::delete($value->path);
            }
        }
    }
}

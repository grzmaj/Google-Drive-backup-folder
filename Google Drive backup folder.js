var source_folder_id = '';
var backup_folder_id = '';
var backup_subfolder_name = "My backup";


function saveBackup() {
	source_folder = DriveApp.getFolderById(source_folder_id);
	backup_folder_id = DriveApp.getFolderById(backup_folder_id);
	var backup_subfolder_id = backup_folder_id.createFolder(backup_subfolder_name + " - " + getDateForSignature());
	var files = source_folder.getFiles();

	while (files.hasNext()) {
		var file_to_copy_id = files.next().getId();
		var new_file_id = DriveApp.getFileById(file_to_copy_id).makeCopy(backup_subfolder_id);
	}
}


function getDateForSignature() {
	var date = new Date();

	var month = date.getMonth() + 1;
	month = month.toString();
	if (month.length == 1) {
		month = "0" + month;
	}

	var day = date.getDate();
	day = day.toString();
	if (day.length == 1) {
		day = "0" + day;
	}
	
	var hour = date.getHours();
	hour = hour.toString();
	if (hour.length == 1) {
		hour = "0" + hour;
	}
	
	var minute = date.getMinutes();
	minute = minute.toString();
	if (minute.length == 1) {
		minute = "0" + minute;
	}
	
	var second = date.getSeconds();
	second = second.toString();
	if (second.length == 1) {
		second = "0" + second;
	}	

	return date.getFullYear() + "." + month + "." + day + " " + hour + ":" + minute + ":" + second;

}

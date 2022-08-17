import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../enviroment';

import {Province} from '../model/province';
import {Employee} from '../model/employee';

import {Position} from '../model/position';
import {District} from '../model/district';
import {Commune} from '../model/commune';

const apiUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployeeList(page: number,
                  code: string,
                  name: string,
                  dobfrom: string,
                  dobend: string,
                  workf: string,
                  workt: string,
                  pid: string,
                  address: string): Observable<Employee[]> {

    if (dobfrom === '') {
      dobfrom = '0000-00-00';
    }

    if (dobend === '') {
      dobend = '9999-12-31';
    }
    if (workf === '') {
      workf = '0000-00-00';
    }
    if (workt === '') {
      workt = '9999-12-31';
    }
    let params = new HttpParams();
    params = params.append('code', code);
    params = params.append('name', name);
    params = params.append('dobend', dobend);
    params = params.append('dobfrom', dobfrom);
    params = params.append('workt', workt);
    params = params.append('workf', workf);
    params = params.append('pid', pid);
    params = params.append('address', address);

    return this.httpClient.get<Employee[]>(apiUrl + `/employee/${page}`, {params});
  }

  getPositionList(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(apiUrl + `/employee/position`);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(apiUrl + `/employee/${id}`);
  }
  create(employee: Employee): Observable<void> {
    console.log(employee);
    return this.httpClient.post<void>(apiUrl + '/employee/add', employee);
  }


  getAllProvince(): Observable<Province[]> {
    return this.httpClient.get<Province[]>(apiUrl + '/address/province');
  }

  getAllDistrict(provinceId: number): Observable<District[]> {
    return this.httpClient.get<District[]>(apiUrl + '/address/district/' + provinceId);
  }

  getAllCommune(districtId: number): Observable<Commune[]> {
    return this.httpClient.get<Commune[]>(apiUrl + '/address/commune/' + districtId);
  }

  findByIdEmployee(id: number) {
    return this.httpClient.get<Employee>(apiUrl + `/employee/id/${id}`);
  }

  editEmployee(id: number, employee: Employee) {
    return this.httpClient.patch<Employee>(apiUrl + `/employee/edit/${id}`, employee);
  }

}




import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';



@Injectable()
export class PublicShareService {

  serviceUrl = ""
  constructor(private _http: HttpClient) {

  }


  getbyId(url: string, id: string): Observable<any> {

    return this._http.get<any>(url + `/${id}`).pipe(
      map((result: any) => { return result }),
      catchError(this.handleError));
  }

  getAll(url: string): Observable<any> {

    return this._http.get<any>(`${url}`).pipe(
      map((result: any) => { return result }),
      catchError(this.handleError));
  }

  getAllWithNoSpiner(url: string): Observable<any> {

    return this._http.get<any>(`${url}`).pipe(debounceTime(400), distinctUntilChanged(),
      map((result: any) => { return result }),
      catchError(this.handleError));
  }




  getXML(url: string): Observable<any> {
    const headers = new HttpHeaders({ "Accept": "application/xml" });
    return this._http.get<any>(`${url}`, { headers: headers }).pipe(
      map((result: any) => { return result }),
      catchError(this.handleError));
  }


  // getGridPage(url: string, query: GridRequest, parameterQs: string): Observable<GridResult<any>> {

  //   let sort = '';
  //   let filter = '';
  //   if (query.Sort.length > 0)
  //     sort = encodeURIComponent(JSON.stringify(query.Sort));

  //   if (query.Filters !== null)
  //     filter = encodeURIComponent(JSON.stringify(query.Filters));


  //   let queryString = 'Page=' + query.Page + '&PageSize=' + query.PageSize
  //     + '&Filter=' + filter + '&Sort=' + sort;
  //   if (parameterQs)
  //     queryString += "&" + parameterQs;

  //   return this._http
  //     .get<GridResult<any>>(
  //       `${this.appConfig.apiEndpoint}${this.appConfig.apiSettingsPath + url}?${queryString}`
  //     ).pipe(
  //       map(result => {
  //         return <GridResult<any>>{
  //           Total: result.Total,
  //           Data: result.Data
  //         };
  //       }), catchError(this.handleError));

  // }



  // getKendoGridData(url: string, state: State, parameterQs: string = ''): Observable<any> {

  //   const queryStr = `${toDataSourceRequestString(state)}`;
  //   const hasGroups = state.group && state.group.length;

  //   return this._http.get(`${this.appConfig.apiEndpoint}${this.appConfig.apiSettingsPath + url}?${queryStr}${parameterQs}`).pipe(
  //     map(({ data, total }: any): GridDataResult => {

  //       return {

  //         data: hasGroups ? translateDataSourceResultGroups(data.data) : data.data,
  //         total: data.total
  //       };
  //     }
  //     ), catchError(this.handleError));
  // }


  // getKendoGridDataExtra(url: string, state: State, parameterQs: string = ''): Observable<any> {

  //   const queryStr = `${toDataSourceRequestString(state)}`;
  //   const hasGroups = state.group && state.group.length;

  //   return this._http.get(`${this.appConfig.apiEndpoint}${this.appConfig.apiSettingsPath + url}?${queryStr}${parameterQs}`).pipe(
  //     map(({ data, total }: any): GridDataResult => {

  //       return {

  //         data: hasGroups ? translateDataSourceResultGroups(data.data) : data,
  //         total: total
  //       };
  //     }
  //     ), catchError(this.handleError));
  // }


  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return observableThrowError(error);
  }



  PostData(url: string, entity: any): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });


    return this._http
      .post(`${url}`, entity, { headers: headers })
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));


  }

  Save(url: string, entity: any, editmode: boolean, headerItems: any): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    if (headerItems)
      headerItems.forEach((element: any) => {
        headers.append(element.headerName, element.value)
      });

    if (!editmode)
      return this._http
        .post(`${url}`, entity, { headers: headers })
        .pipe(
          map(response => response || {}),
          catchError(this.handleError));
    else
      return this._http
        .put(`${url}`, entity, { headers: headers })
        .pipe(
          map(response => response || {}),
          catchError(this.handleError));
  }


  SaveFormData(url: string, entity: any, editmode: boolean): Observable<any> {

    if (!editmode)
      return this._http
        .post(`${url}`, entity)
        .pipe(
          map(response => response || {}),
          catchError(this.handleError));
    else
      return this._http
        .put(`${url}`, entity)
        .pipe(
          map(response => response || {}),
          catchError(this.handleError));
  }



  onDelete(url: string, id: String): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this._http
      .delete(`${url}/${id}`, { headers: headers })
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));

  }


  onDeleteByQueryString(url: string, qs: string): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this._http
      .delete(`${url + qs}`, { headers: headers })
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }

  uploadFile(url: string, file: any): Observable<any> {
    return this._http
      .put(`${url}`, file, { reportProgress: true, observe: 'events' })
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }



}

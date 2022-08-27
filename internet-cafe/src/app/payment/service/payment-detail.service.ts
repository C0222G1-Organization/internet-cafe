import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Record} from '../model/record';
import {PaymentDetail} from '../model/payment-detail';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  private RECORD_API = `${environment.apiUrl}` + '/record';

  private PAYMENT_DETAIL_API = `${environment.apiUrl}` + '/paymentDetail';

  constructor(private http: HttpClient) {
  }

  /**
   * Create by DuyNT
   * Create date: 15/08/2022
   * method save payment to DB after ordering
   * @return payment
   */
  loadInfoRecordById(id: number): Observable<Record> {
    return this.http.get<Record>(this.RECORD_API + '/' + id);
  }

  /**
   * Create by DuyNT
   * Create date: 15/08/2022
   * method save payment detail list to DB after ordering
   */
  savePaymentDetail(paymentDetail: PaymentDetail): Observable<void> {
    console.log('saving');
    return this.http.post<void>(this.PAYMENT_DETAIL_API + '/create', paymentDetail);
  }
}
## Download attached file from rest-api service

```bash
  public downloadPDF(body: any): any {
    var mediaType = 'application/pdf';
    return this.http.post(this.baseUrl + this.subUrl, body, { responseType: 'blob' }).subscribe(
        (response) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'report.pdf');
        },
        e => { alert(e); }
    );
  }
```

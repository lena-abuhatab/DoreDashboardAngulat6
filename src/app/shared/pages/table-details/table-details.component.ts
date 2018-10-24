import { ActivatedRoute, ParamMap } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Service } from "../../components/pages/table/data.service";

@Component({
  selector: "app-table-details",
  templateUrl: "./table-details.component.html",
  styleUrls: ["./table-details.component.css"]
})
export class TableDetailsComponent implements OnInit {
  resultSearch: string;
  constructor(private route: ActivatedRoute, private _service: Service) {}

  order;
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.resultSearch = paramMap.get("id");
    });
  }
}

package beans;

import db.DataBaseIntegration;
import lombok.Data;
import lombok.NoArgsConstructor;
import utils.PointFactory;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.inject.Inject;

@Data
@ManagedBean(name = "bean")
@SessionScoped
@NoArgsConstructor
public class DataBean {

    @Inject
    private PointFactory pointFactory;

    @Inject
    private DataBaseIntegration dataBaseIntegration=new DataBaseIntegration();

    private Double x = 1.0;
    private Double y = 1.0;
    private Double r = 1.0;

    public String save() {
        System.out.println(x.toString() + ' ' + y.toString() + ' ' + r.toString());
        if (insertIntoDatabase(pointFactory.buildPoint(this))) {
            return "index";
        } else return "failure";

    }

    public boolean insertIntoDatabase(Point point) {
        dataBaseIntegration.addPoint(point);
        return true;
    }

    public Boolean check() {
        return (this.x <= 0 && this.y >= 0 && ((this.x * this.x + this.y * this.y) <= (this.r * this.r))) ||
                (this.x >= 0 && this.y >= 0 && this.x < this.r / 2 && this.y < this.r ||
                        (this.x >= 0 && this.y <= 0 && (this.y >= this.x * 2 - this.r)));
    }

    public Double getX() {
        return this.x;
    }

    public Double getY() {
        return this.y;
    }

    public Double getR() {
        return this.r;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public void setR(Double r) {
        this.r = r;
    }
}

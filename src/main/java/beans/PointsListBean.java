package beans;

import db.DataBaseIntegration;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.io.PipedInputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@ManagedBean(name="PointList")
@SessionScoped
@Data
@NoArgsConstructor
public class PointsListBean implements Serializable {

    @Inject
    private DataBaseIntegration dataBaseIntegration =new DataBaseIntegration();

    private List<Point> points;

    @PostConstruct
    public void init(){
        loadPoints();
    }

    public void loadPoints(){
        this.points = dataBaseIntegration.getAllPoints();
    }

    public List<Point> getPoints(){
        loadPoints();
        if(points==null){
            points=new ArrayList<>();
        }
        return points;
    }
}
